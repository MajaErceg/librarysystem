package rs.ac.singidunum.librarysystem.service;

import rs.ac.singidunum.librarysystem.model.Renting;

import java.util.List;

public interface RentingServiceInterface {
    public void createHistory(Renting renting);
    public List<Renting> findByMembershipNumber(String membershipNumber);
    public Renting update(Renting renting);
    public void delete(String membershipNumber);
}
