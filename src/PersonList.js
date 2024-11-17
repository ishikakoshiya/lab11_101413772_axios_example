import React, { Component } from 'react';
import axios from 'axios';
import './PersonList.css'; 

class PersonList extends Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="container">
                <h1 className="title">User List</h1>
                {this.state.persons.map((person, index) => (
                    <div className="card" key={index}>
                        <div className="card-header">
                            <h2>{`${person.name.title} ${person.name.first} ${person.name.last}`}</h2>
                            <p>{person.login.uuid}</p>
                        </div>
                        <div className="card-body">
                            <div className="card-image">
                                <img src={person.picture.large} alt={`${person.name.first}`} />
                            </div>
                            <div className="card-details">
                                <p><strong>User Name:</strong> {person.login.username}</p>
                                <p><strong>Gender:</strong> {person.gender.toUpperCase()}</p>
                                <p><strong>Time Zone Description:</strong> {person.location.timezone.description}</p>
                                <p><strong>Address:</strong> {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country} - ${person.location.postcode}`}</p>
                                <p><strong>Email:</strong> {person.email}</p>
                                <p><strong>Birth Date and Age:</strong> {`${new Date(person.dob.date).toLocaleDateString()} (${person.dob.age})`}</p>
                                <p><strong>Register Date:</strong> {new Date(person.registered.date).toLocaleDateString()}</p>
                                <p><strong>Phone:</strong> {person.phone}</p>
                                <p><strong>Cell:</strong> {person.cell}</p>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="details-button">Details</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default PersonList;
