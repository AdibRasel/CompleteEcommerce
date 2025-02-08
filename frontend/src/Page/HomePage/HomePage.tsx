import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <Container>
          <h1>স্বাগতম শাহ মিনি বাজারে!</h1>
          <p>সেরা দামে সেরা পণ্য, সরাসরি ঘরে পৌঁছে দিচ্ছি।</p>
          <Button variant="light" size="lg">এখনই কেনাকাটা করুন</Button>
        </Container>
      </div>

      {/* Categories Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">ক্যাটাগরি</h2>
        <Row>
          {['মুদি সামগ্রী', 'ক্রোকাইরিজ সামগ্রী', 'কসমেটিক্স সামগ্রী', 'কনফেকশনারী সামগ্রী', 'স্টেশনারী সামগ্রী, গিপ্ট সামগ্রী', 'খেলনা সামগ্রী', 'অন্যান্য'].map((category, index) => (
            <Col key={index} md={3} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>{category}</Card.Title>
                  <Button variant="primary">দেখুন</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Best Seller Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">জনপ্রিয় পণ্য</h2>
        <Row>
          {[1, 2, 3, 4].map((item) => (
            <Col key={item} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={`https://via.placeholder.com/150`} />
                <Card.Body>
                  <Card.Title>পণ্য {item}</Card.Title>
                  <Button variant="success">কিনুন</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <div className="bg-dark text-white text-center py-4">
        <Container>
          <p>© ২০২৫ শাহ মিনি বাজার | সর্বস্বত্ব সংরক্ষিত</p>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
