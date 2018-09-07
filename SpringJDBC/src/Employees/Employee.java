package Employees;

public class Employee {

	private String name;
	private String empID;
	private int salary;
	
	public Employee(){
		
	}
	
	public Employee(String name, String empID, int salary) {
		this.name = name;
		this.empID = empID;
		this.salary = salary;
	}



	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmpID() {
		return empID;
	}
	public void setEmpID(String empID) {
		this.empID = empID;
	}
	public int getSalary() {
		return salary;
	}
	public void setSalary(int salary) {
		this.salary = salary;
	}
	
}
