package rs.ac.singidunum.librarysystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.librarysystem.model.EmployeeModel;
import rs.ac.singidunum.librarysystem.repository.EmployeeRepository;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class EmployeeService {

//    @Autowired
//    private EmployeeRepository employeeRepository;
//
//    @Autowired
//    private AutoMapperService autoMapperService;
//
//    @Override
//    public Employee findByUsername(String username){
//        return employeeRepository.findByUsername(username);
//    }
//
//    @Override
//    public Employee insert(EmployeeModel model){
//
//        model.setEmail(validateEmail(model.getEmail()));
//        model.setPassword(validatePassword(model.getPassword()));
//        model.setUsername(validateUsername(model.getUsername()));
//
//        if (model.getPassword() != null) {
//            model.setPassword(model.getPassword());
//        }
//
//        if (model.getEmail() == null || model.getUsername() == null || model.getPassword() == null){
//            return null;
//        }else {
//            return employeeRepository.insert(autoMapperService.map(model, Employee.class));
//        }
//    }
//
//    @Override
//    public Employee login(EmployeeModel model){
//        Employee employ = employeeRepository.findByUsername(model.getUsername());
//
//        if (employ == null) {
//            return null;
//        }
//        else{
//            if (!model.getPassword().equals(employ.getPassword())){
//
//                return null;
//            }
//
//            return autoMapperService.map(model, Employee.class);
//        }
//    }
//    @Override
//    public Employee update(EmployeeModel model){
//        Employee employ = employeeRepository.findByUsername(model.getUsername());
//
//        employ.setFullname(model.getFullname());
//        employ.setEmail(model.getEmail());
//        employ.setUsername(model.getUsername());
//        if ( model.getPassword() != null && model.getPassword() != ""){
//            employ.setPassword(model.getPassword());
//        }
//
//        this.employeeRepository.save(employ);
//
//        return autoMapperService.map(model, Employee.class);
//    }
//
//    public String validateEmail(String email){
//        Pattern pattern = Pattern.compile("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$", Pattern.CASE_INSENSITIVE);
//        Matcher matcher = pattern.matcher(email);
//        boolean matchFound = matcher.find();
//
//        Employee employ = employeeRepository.findByEmail(email);
//
//        if(matchFound && employ == null) {
//            return email;
//        } else {
//            return null;
//        }
//    }
//
//    public String validatePassword(String password){
//        if (password.length() < 8){
//            return null;
//        }else
//            return password;
//    }
//
//    public String validateUsername(String username){
//        Employee employ = employeeRepository.findByUsername(username);
//
//        if(employ == null){
//            return username;
//        }else{
//            return null;
//        }
//    }

}
