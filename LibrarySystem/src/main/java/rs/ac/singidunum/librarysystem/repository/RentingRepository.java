package rs.ac.singidunum.librarysystem.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import rs.ac.singidunum.librarysystem.model.Renting;

@Repository
public interface RentingRepository extends MongoRepository<Renting, Long> {
}
