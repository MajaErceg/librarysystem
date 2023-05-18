package rs.ac.singidunum.librarysystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.librarysystem.model.Renting;
import rs.ac.singidunum.librarysystem.service.RentingService;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class RentingController {

    public RentingService rentingService;

    public RentingController(RentingService rentingService) {
        this.rentingService = rentingService;
    }

    @GetMapping(value="/all/history/{membershipNumber}")
    public List<Renting> findByMembershipNumber(@PathVariable("membershipNumber") String membershipNumber) {
        return rentingService.findByMembershipNumber(membershipNumber);
    }

    @PostMapping(value = "history/create")
    public void createHistory(@RequestBody Renting renting)
    {
        rentingService.createHistory(renting);
    }

    @PutMapping("update/history/{membershipNumber}")
    public Renting update(@RequestBody Renting renting)
    {
        return rentingService.update(renting);
    }

    @DeleteMapping("/{membershipNumber}")
    public void delete(@PathVariable("membershipNumber") String membershipNumber)
    {
        rentingService.delete(membershipNumber);
    }

}
