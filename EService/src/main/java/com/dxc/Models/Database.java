package com.dxc.Models;

import java.util.ArrayList;
import java.util.Iterator;

import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class Database {

	
	private static final String DBNAME="eService";
	private static final String SERVICE_COLLECTION="serviceDB";
	private static final String ADMIN_COLLECTION="adminDB";

	private static MongoCollection<Document> serviceCollection; 
	private static MongoCollection<Document> adminCollection; 
	
	public static void connect()
	{
		MongoClient mongo=new MongoClient("localhost",27017);
		MongoDatabase database=mongo.getDatabase(DBNAME);
		serviceCollection=database.getCollection(SERVICE_COLLECTION);
		adminCollection=database.getCollection(ADMIN_COLLECTION);
	}
	                           
	public static ArrayList retreiveAllServicemen()
	{
		ArrayList al=new ArrayList();
		FindIterable<Document>fit=serviceCollection.find();
		Iterator<Document> it=fit.iterator();
		while(it.hasNext())
		{
		 Document serviceDocument=(Document)it.next();	
		 Serviceman empObject=DocumentMapper.getServiceman(serviceDocument);
		 al.add(empObject);
		}
		return al;
	}
	
	public static ArrayList retreiveByCity(String city){
		ArrayList al=new ArrayList();
		Document doc = new Document();
		doc.append("city", city);
		FindIterable<Document>fit=serviceCollection.find(doc);
		Iterator<Document> it=fit.iterator();
		while(it.hasNext())
		{
		 Document serviceDocument=(Document)it.next();	
		 Serviceman empObject=DocumentMapper.getServiceman(serviceDocument);
		 al.add(empObject);
		}
		return al;
	}
	
	public static ArrayList retreiveByCategory(String category){
		ArrayList al=new ArrayList();
		Document doc = new Document();
		doc.append("category", category);
		FindIterable<Document>fit=serviceCollection.find(doc);
		Iterator<Document> it=fit.iterator();
		while(it.hasNext())
		{
		 Document serviceDocument=(Document)it.next();	
		 Serviceman empObject=DocumentMapper.getServiceman(serviceDocument);
		 al.add(empObject);
		}
		return al;
	}
	
	public static ArrayList retreiveByCombo(String city, String category){
		ArrayList al=new ArrayList();
		Document doc = new Document();
		doc.append("city", city).append("category", category);
		FindIterable<Document>fit=serviceCollection.find(doc);
		Iterator<Document> it=fit.iterator();
		while(it.hasNext())
		{
		 Document serviceDocument=(Document)it.next();	
		 Serviceman empObject=DocumentMapper.getServiceman(serviceDocument);
		 al.add(empObject);
		}
		return al;
	}
	
	public static ArrayList retreiveService(String email){
		ArrayList al=new ArrayList();
		Document doc = new Document();
		doc.append("email", email);
		FindIterable<Document>fit=serviceCollection.find(doc).limit(1);
		Iterator<Document> it=fit.iterator();
		while(it.hasNext())
		{
		 Document serviceDocument=(Document)it.next();	
		 Serviceman empObject=DocumentMapper.getServiceman(serviceDocument);
		 al.add(empObject);
		}
		return al;
	}
	
	public static void addServiceman(Document std)
	{
	  serviceCollection.insertOne(std);	
	}
}
