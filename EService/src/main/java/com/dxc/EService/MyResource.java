package com.dxc.EService;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.dxc.Models.Serviceman;
import com.dxc.Services.ServicemanService;
/**
 * Root resource (exposed at "myresource" path)
 */
@Path("myresource")
public class MyResource {

    /**
     * Method handling HTTP GET requests. The returned object will be sent
     * to the client as "text/plain" media type.
     *
     * @return String that will be returned as a text/plain response.
     */
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getIt() {
        return "Got it!";
    }
    
    @GET
    @Path("admin/{user}/{pass}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response heckAdmin(@PathParam("user") String user, @PathParam("pass") String pass)
    {
    	return Response.ok(ServicemanService.checkAdmin(user,pass))
//    			.header("Access-Control-Allow-Origin", "*")
    			.build();
    }
    
    @GET
    @Path("services")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll() {
    	return Response.ok(ServicemanService.getAllServices())
//    			.header("Access-Control-Allow-Origin", "*")
    			.build();
    }
    
    @GET
    @Path("newlyAdded")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAdded() {
    	return Response.ok(ServicemanService.getNewAdded())
//    			.header("Access-Control-Allow-Origin", "*")
    			.build();
    }
    
    @GET
    @Path("highRated")
    @Produces(MediaType.APPLICATION_JSON)
    public Response highRated() {
    	return Response.ok(ServicemanService.getHighRated())
//    			.header("Access-Control-Allow-Origin", "*")
    			.build();
    }
    
    @GET
    @Path("servicesCity/{city}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getServiceByCity(@PathParam("city") String city)
    {
    	return Response.ok(ServicemanService.getServiceByCity(city))
//    			.header("Access-Control-Allow-Origin", "*")
    			.build();
    }
    
    @GET
    @Path("displayServices/{email}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getServiceByEmail(@PathParam("email") String email)
    {
    	return Response.ok(ServicemanService.getServiceByEmail(email))
//    			.header("Access-Control-Allow-Origin", "*")
    			.build();
    	
    }
    
    @GET
    @Path("servicesCategory/{category}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getServiceByCategory(@PathParam("category") String category)
    {
    	return Response.ok(ServicemanService.getServiceByCategory(category))
//    			.header("Access-Control-Allow-Origin", "*")
    			.build();
    	
    }
    
    @GET
    @Path("servicesCombo/{city}/{category}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getServiceByCombo(@PathParam("city") String city, @PathParam("category") String category)
    {
    	return Response.ok(ServicemanService.getServiceByCombo(city,category))
//    			.header("Access-Control-Allow-Origin", "*")
    			.build();
    }
    
    @POST
    @Path("add")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response add(Serviceman input)
    {
    	System.out.println("Input Serviceman "+input);
    	ServicemanService.add(input);
    	return Response.ok("{\"status\":\"0\",\"message\":\"successfuly added\"}")
    			//.header("Access-Control-Allow-Origin", "*")
    			.build();

    }
    
    @PUT
    @Path("edit/{email}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String update(@PathParam("email") String email, Serviceman input)
    {
    	
    	ArrayList updated=ServicemanService.editService(email,input);
    	if(updated==null)
    		return "{\"status\":\"1\",\"message\":\"No such student found\"}";
    	else
    		return "{\"status\":\"0\",\"message\":\"Updated successfully\"}";
    }
    
    @DELETE
    @Path("delete/{email}")
    @Produces(MediaType.APPLICATION_JSON)
    public String delete(@PathParam("email") String email)
    {
        if(ServicemanService.delete(email))
        {
         	return "{\"status\":\"0\",\"message\":\"successfuly deleted\"}";
        }
        else
        {
        return "{\"status\":\"1\",\"message\":\"Not found\"}";        	
        }
    }
    
}

