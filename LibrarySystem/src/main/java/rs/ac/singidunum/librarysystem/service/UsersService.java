package rs.ac.singidunum.librarysystem.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import rs.ac.singidunum.librarysystem.model.Users;
import rs.ac.singidunum.librarysystem.repository.UsersRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class UsersService implements UsersServiceInterface {

    @Autowired
    public UsersRepository usersRepository;

    @Autowired
    public MongoTemplate mongoTemplate;

    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @Override
    public List<Users> getAllUsers() {
        List<Users>temporaryList = new ArrayList<Users>();
        temporaryList = usersRepository.findAll();
        return temporaryList;
    }

    @Override
    public void createUsers(Users users) {
        usersRepository.insert(users);
    }

    @Override
    public void delete(String membershipNumber) {
        Query query = new Query();
        query.addCriteria(Criteria.where("membershipNumber").is(membershipNumber));
        mongoTemplate.remove(query, Users.class);
    }

    @Override
    @CrossOrigin
    public void update(Users users) {
        Query query = new Query();
        query.addCriteria(Criteria.where("membershipNumber").is(users.getMembershipNumber()));

        Update update = new Update();
        update.set("fullname", users.getFullname());
        update.set("profession", users.getProfession());
        update.set("birthDate", users.getBirthDate());
        update.set("address", users.getAddress());
        update.set("city", users.getCity());
        update.set("phoneNumber", users.getPhoneNumber());
        update.set("membershipNumber", users.getMembershipNumber());

        Users u = mongoTemplate.findAndModify(query, update, Users.class);
    }

    @Override
    public Users findByMembershipNumber(String membershipNumber) {
        Query query = new Query();
        query.addCriteria(Criteria.where("membershipNumber").is(membershipNumber));

        List<Users> u = mongoTemplate.find(query, Users.class);
        return u.get(0);
    }
}
