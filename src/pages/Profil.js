import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import '../style/Profil.css';

const Profil = () => {
    // State untuk data profil
    const [profil, setProfil] = useState({
        nama: 'Bunga Gayati',
        nomorTelepon: '089536214799',
        email: 'bunga123@gmail.com'
    });

    // Mengambil data dari localStorage saat pertama kali komponen dirender
    useEffect(() => {
        const storedNama = localStorage.getItem('nama');
        const storedNomorTelepon = localStorage.getItem('nomorTelepon');
        const storedEmail = localStorage.getItem('email');

        setProfil({
            nama: storedNama || 'Bunga Gayati',
            nomorTelepon: storedNomorTelepon || '089536214799',
            email: storedEmail || 'bunga123@gmail.com'
        });
    }, []);

    return (
        <div className="profil-page">
            {/* Sidebar */}
            <Navbar className="sidebar">
                <Navbar.Brand className="sidebar-logo">WizzBite</Navbar.Brand>
                <Nav className="flex-column nav-links">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/Home">🏠 Beranda</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/Pesanan">🛒 Pesanan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/Ulasan">⭐ Ulasan</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>

            {/* Main Profile Section */}
            <Container className="profil-content">
                {/* Profile Header */}
                <Row className="profil-header justify-content-center">
                    <Col xs="auto" className="text-center">
                        <FaUserCircle className="profil-icon" size={80} />
                        <h5 className="change-profile-text">
                            <Link to="/UbahProfil">Ubah Profil</Link>
                        </h5>
                    </Col>
                </Row>

                {/* Divider */}
                <hr className="divider" />

                {/* Profile Details */}
                <Card className="profil-card">
                    <Card.Body>
                        <Row className="profile-info">
                            <Col xs={6}>Nama</Col>
                            <Col xs={6} className="text-right">{profil.nama}</Col>
                        </Row>
                        <Row className="profile-info">
                            <Col xs={6}>No. Handphone</Col>
                            <Col xs={6} className="text-right">
                                <Link to="/UbahNomor">{profil.nomorTelepon}</Link>
                            </Col>
                        </Row>
                        <Row className="profile-info">
                            <Col xs={6}>Email</Col>
                            <Col xs={6} className="text-right">{profil.email}</Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Profil;