package com.dxc.Services;

import java.util.ArrayList;

import org.bson.Document;

import com.dxc.Models.Database;
import com.dxc.Models.DocumentMapper;
import com.dxc.Models.Serviceman;


public class ServicemanService {

	static{

		Database.connect();
	}
	
	 public static ArrayList getAllServices()
		{
		 ArrayList servicemanList=Database.retreiveAllServicemen();
		 return servicemanList;
		}
	 
		
		public static ArrayList getServiceByCity(String city)
		{
			ArrayList serviceByCity=Database.retreiveByCity(city);
			return serviceByCity;
		}
		
		public static ArrayList getServiceByEmail(String email)
		{
			ArrayList service=Database.retreiveService(email);
			return service;
		}
	 
		public static ArrayList getServiceByCategory(String category)
		{
			ArrayList serviceByCategory=Database.retreiveByCategory(category);
			return serviceByCategory;
		}
		
		public static ArrayList getServiceByCombo(String city, String category)
		{
			ArrayList serviceByCombo=Database.retreiveByCombo(city, category);
			return serviceByCombo;
		}

		public static void add(Serviceman std)
		{
		    Document stdDoc=DocumentMapper.getDocument(std);
		    Database.addServiceman(stdDoc);	    
		}
	
}
