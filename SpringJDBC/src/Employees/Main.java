package Employees;

import java.util.List;
import java.util.Scanner;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

	public static void main(String[] args) {

		ApplicationContext context = new  ClassPathXmlApplicationContext("Bean.xml"); 
		EmployeeDAO empDAO=(EmployeeDAO)context.getBean("edao");
		
		System.out.println("Enter choice : 1 Add Employee 2.Search By ID 3. Delete By ID ");		
		Scanner sc=new Scanner(System.in);
		int choice=sc.nextInt();
		sc.nextLine();
		switch(choice)
		{
		case 1:
			System.out.println("Enter name ");
			String name=sc.nextLine();
			System.out.println("Enter id ");
			String id=sc.nextLine();
			System.out.println("Enter salalry");
			int salary=sc.nextInt();
			Employee e=new Employee(name,id,salary);
			empDAO.addEmployee(e);
			break;
		case 2:
		System.out.println("Enter Employee ID");
		String eid = sc.nextLine();
		List<Employee> emps=empDAO.getbyID(eid);
		for(Employee em:emps)
		{
			System.out.println("ID : "+em.getName()+" SALARY : "+em.getSalary()+" NAME : "+em.getEmpID());
		}
			
		case 3:
			System.out.println("Enter Employee ID");
			String deleleID = sc.nextLine();
			empDAO.deleleByID(deleleID);
			System.out.println("Delete Successful");
		}


	}

}
