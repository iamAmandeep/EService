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
	 
	 	public static ArrayList getNewAdded()
		{
		 ArrayList newAddedList=Database.retreiveNewAdded();
		 return newAddedList;
		}
	 
	 	public static ArrayList getHighRated()
		{
		 ArrayList highRatedList=Database.retreiveHighRated();
		 return highRatedList;
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
	
		public static ArrayList editService(String email, Serviceman newServ)
		{
			ArrayList serviceEdit = Database.editService(email, newServ);
			return serviceEdit;
		}
		
		public static boolean delete(String email)
		{
			boolean success;
			ArrayList deletedArray=Database.deleteService(email);
			if(deletedArray==null) {
				success=false;
			}
			else {
				success=true;
			}
			return success;
		}
		
		public static ArrayList checkAdmin(String user, String pass)
		{
			ArrayList serviceByCombo=Database.checkAuth(user, pass);
			return serviceByCombo;
		}

}
