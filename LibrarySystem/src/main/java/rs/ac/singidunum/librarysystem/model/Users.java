package rs.ac.singidunum.librarysystem.model;

public class Users {
    private String fullname;
    private String profession;
    private String birthDate;
    private String address;
    private String city;
    private String phoneNumber;
    private String membershipNumber;

    public Users() {}

    public Users(String fullname, String profession, String birthDate, String address, String city, String phoneNumber,String membershipNumber) {
        this.fullname = fullname;
        this.profession = profession;
        this.birthDate = birthDate;
        this.address = address;
        this.city = city;
        this.phoneNumber = phoneNumber;
        this.membershipNumber = membershipNumber;
    }
    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getMembershipNumber() {
        return membershipNumber;
    }

    public void setMembershipNumber(String membershipNumber) {
        this.membershipNumber = membershipNumber;
    }

}
