package com.dxc.Models;

import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class DocumentMapper {

	public static Serviceman getServiceman(Document d)
	{
		Serviceman service=new Serviceman();
		
		service.setName(d.getString("name"));
		service.setEmail(d.getString("email"));
		service.setMobile(d.getString("mobile"));
		service.setCity(d.getString("city"));
		service.setCategory(d.getString("category"));
		service.setRating(d.getString("rating"));
		service.setExperience(d.getString("experience"));
		service.setRate(d.getString("rate"));
		return service;
		
	}
	
	public static Document getDocument(Serviceman service)
	{
		
		Document doc=new Document()
				.append("name",service.getName())
				.append("email", service.getEmail())
				.append("mobile", service.getMobile())
				.append("city", service.getCity())
				.append("category", service.getCategory())
				.append("rating", service.getRating())
				.append("experience", service.getExperience())
				.append("rate", service.getRate());
				
		return doc;

	}
	
}
