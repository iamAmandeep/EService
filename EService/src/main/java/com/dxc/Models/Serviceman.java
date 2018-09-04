package com.dxc.Models;

public class Serviceman {
	
	private String name;
	private String email;
	private String mobile;
	private String city;
	private String category;
	private String experience;
	private String rating;
	private String rate;
	
	public Serviceman() {
		
	}
	
	public Serviceman(String name, String email, String mobile, String city, String category, 
										String experience, String rating, String rate) 
	{
		this.name = name;
		this.email = email;
		this.mobile = mobile;
		this.city = city;
		this.category = category;
		this.experience = experience;
		this.rating = rating;
		this.rate = rate;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getExperience() {
		return experience;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public String getRate() {
		return rate;
	}

	public void setRate(String rate) {
		this.rate = rate;
	}
	
}
