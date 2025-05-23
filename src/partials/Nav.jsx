import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Nav() {
    const navigate = useNavigate();
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const role = localStorage.getItem('userRole');
        setUserRole(role);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userId');
        navigate('/login');
    };

    const handlePatientsClick = () => {
        navigate('/patients');
    };

    const styles = {
        sidebarLayout: {
            position: 'fixed',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: 'auto',
            backgroundColor: '#2C3E50',
            justifyContent: 'start',
            top: 75,
            left: 0,
            padding: '2em',
            borderRight: '4px solid black',
            color: 'white',
        },
        sidebarContainer: {
            alignItems: 'start',
            fontFamily: 'Poppins',
        },
        sidebarList: {
            listStyle: 'none',
            padding: 0,
        },
        sidebarListItem: {
            marginBottom: '10px',
            cursor: 'pointer',
            padding: '10px',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
            '&:hover': {
                backgroundColor: '#34495E',
            }
        },
        logoutButton: {
            marginTop: '20px',
            padding: '10px 15px',
            backgroundColor: '#E74C3C',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#C0392B',
            }
        }
    };

    return (
        <nav style={styles.sidebarLayout}>
            <div>
                <h2>DASHBOARD</h2>
            </div>

            <div style={styles.sidebarContainer}>
                <ul style={styles.sidebarList}>
                    <li 
                        style={styles.sidebarListItem} 
                        onClick={handlePatientsClick}
                    >
                        Patients
                    </li>
                    <li style={styles.sidebarListItem}>Settings</li>
                </ul>
                
                <button 
                    onClick={handleLogout}
                    style={styles.logoutButton}
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Nav;