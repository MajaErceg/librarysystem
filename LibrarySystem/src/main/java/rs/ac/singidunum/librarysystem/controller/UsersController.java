package rs.ac.singidunum.librarysystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.librarysystem.model.Users;
import rs.ac.singidunum.librarysystem.service.UsersService;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UsersController {

    public UsersService usersService;

    @Autowired
    public UsersController(UsersService pS) {

        usersService = pS;
    }

    @GetMapping(value="/all")
    public List<Users> getAllUsers() {
        return usersService.getAllUsers();
    }

    @GetMapping(value="/all/{membershipNumber}")
    public Users findByMembershipNumber(@PathVariable("membershipNumber") String membershipNumber) {
        return usersService.findByMembershipNumber(membershipNumber);
    }

    @PostMapping(value = "/create")
    public void createUsers(@RequestBody Users users)
    {
        usersService.createUsers(users);
    }

    @DeleteMapping("/remove/{membershipNumber}")
    public void delete(@PathVariable("membershipNumber") String membershipNumber)
    {
        usersService.delete(membershipNumber);
    }

    @PutMapping("update/{membershipNumber}")
    @CrossOrigin
    public void update(@RequestBody Users users)
    {
        usersService.update(users);
    }

}
