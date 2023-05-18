package rs.ac.singidunum.librarysystem.service;

import rs.ac.singidunum.librarysystem.model.Users;

import java.util.List;

public interface UsersServiceInterface {
    public List<Users> getAllUsers();
    public void createUsers(Users users);
    public void delete(String membershipNumber);
    public void update(Users users);
    public Users findByMembershipNumber(String membershipNumber);
}
