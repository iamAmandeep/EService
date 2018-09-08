package com.dxc.EService;

import java.io.IOException;
import java.util.StringTokenizer;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.ext.Provider;
import javax.ws.rs.core.Response;

import org.glassfish.jersey.internal.util.Base64;

@Provider
public class ResponseFilter implements ContainerRequestFilter,ContainerResponseFilter
{
	public static final String AUTHERIZATION_KEY="Authorization";
	@Override
	public void filter(ContainerRequestContext requestContext, ContainerResponseContext responseContext)
			throws IOException {
	
	 MultivaluedMap<String,Object> respHeaders=responseContext.getHeaders();
     respHeaders.add("Access-Control-Allow-Origin","*");
     respHeaders.add("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");			
  	 respHeaders.add("Access-Control-Allow-Headers", "X-Requested-With,Origin, Content-Type, X-Codingpedia");
	
	}
	
	@Override
	public void filter(ContainerRequestContext requestContext) throws IOException {
		
		if(requestContext.getUriInfo().getPath().contains("admin"))			
		{
			System.out.println("admin mila url me");
		MultivaluedMap<String,String> reqHeaders=requestContext.getHeaders();
	     
	     if(reqHeaders.containsKey(AUTHERIZATION_KEY))
	     {	System.out.println("Authorisation key mili");
	    	 //permit
	    	 String auth_message=reqHeaders.get(AUTHERIZATION_KEY).get(0);
	    	 auth_message=auth_message.replaceFirst("Basic ","");
	    	 System.out.println("Auth message from client : "+auth_message);
	    	 String decoded=Base64.decodeAsString(auth_message);
	    	 System.out.println("Decoded = "+decoded);
	    	 StringTokenizer tokenizer=new StringTokenizer(decoded,":");
	    	 
	    	 String username= tokenizer.nextToken();
	    	 String password=tokenizer.nextToken();
	    	 
	    	 System.out.println("USRNAME : "+username);
	    	 System.out.println("PASSWORD : "+password);
	    	 
	    	 
	    	 if(!(username.equalsIgnoreCase("abc") && password.equals("def")))
	    	 {
		    	 Response forbid=Response.status(Status.UNAUTHORIZED).build();
			    	requestContext.abortWith(forbid);
	    	 }
	     }
	     else
	     {
	    	 //deny
	    	 Response forbid=Response.status(Status.FORBIDDEN).build();
	    	requestContext.abortWith(forbid);
	     }
	     
		}
		
	}	
	
	

}
