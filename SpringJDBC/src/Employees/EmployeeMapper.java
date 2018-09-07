package Employees;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class EmployeeMapper implements RowMapper<Employee> {

	@Override
	public Employee mapRow(ResultSet rs, int num) throws SQLException {
		return new Employee(rs.getString("empID"), rs.getString("name"), rs.getInt("salary"));
	}
	
}
