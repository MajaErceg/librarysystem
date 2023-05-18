package rs.ac.singidunum.librarysystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.librarysystem.model.Renting;
import rs.ac.singidunum.librarysystem.model.Users;
import rs.ac.singidunum.librarysystem.repository.RentingRepository;

import java.util.List;

@Service
public class RentingService implements RentingServiceInterface {
    @Autowired
    public RentingRepository rentingRepository;

    public RentingService(RentingRepository rentingRepository) {
        this.rentingRepository = rentingRepository;
    }

    @Autowired
    public MongoTemplate mongoTemplate;

    @Override
    public void createHistory(Renting renting) {
        rentingRepository.insert(renting);
    }

    @Override
    public List<Renting> findByMembershipNumber(String membershipNumber) {
        Query query = new Query();
        query.addCriteria(Criteria.where("membershipNumber").is(membershipNumber));

        List<Renting> r = mongoTemplate.find(query, Renting.class);
        return r;
    }

    @Override
    public Renting update(Renting renting) {
         /* MongoOperations mongoOperation = null;

        Query query = new Query();
        query.addCriteria(Criteria.where("membershipNumber").is(membershipNumber));

        Renting r = mongoOperation.findOne(query, Renting.class);
        Update update = new Update();

        mongoOperation.updateFirst(query, update, Renting.class);*/

        rentingRepository.save(renting);

        return renting;
    }

    @Override
    public void delete(String membershipNumber) {
        Query query = new Query();
        query.addCriteria(Criteria.where("membershipNumber").is(membershipNumber));
        mongoTemplate.remove(query, Renting.class);
    }
}
