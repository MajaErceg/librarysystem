package rs.ac.singidunum.librarysystem.model;

public class Renting {
    private String membershipNumber;
    private String date;
    private String bookName;
    private String type;
    private String author;
    private String desc;
    //private String images;

    public Renting(String membershipNumber, String date, String bookName, String type, String author, String desc) {
        this.membershipNumber = membershipNumber;
        this.date = date;
        this.bookName = bookName;
        this.type = type;
        this.author = author;
        this.desc = desc;
    }

    public String getMembershipNumber() {
        return membershipNumber;
    }

    public void setMembershipNumber(String membershipNumber) {
        this.membershipNumber = membershipNumber;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}
