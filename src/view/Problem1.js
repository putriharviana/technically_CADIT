import React, { useState, useEffect }  from 'react';
import dataSalaries from "../data/salary_data.json"

const Problem1 = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [categories, setCategory] = useState([]);
    
    const salaryInIDR = dataSalaries.array.map(item => {
        return item.salaryInIDR
    })

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setCategory(data);
                    console.log(data)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        { (categories.length > 0) ? categories.map( (category, index) => {
                            return (
                                <tr key={ index }>
                                    <td scope="row">{ category.id }</td>
                                    <td scope="row">{ category.name }</td>
                                    <td scope="row">{ category.username }</td>
                                    <td scope="row">{ category.email }</td>
                                    <td scope="row">{ category.address.street } { category.address.suite } { category.address.city }</td>
                                    <td scope="row">{ category.phone }</td>
                                </tr>
                            )
                        })
                        : <tr><td colSpan="5">Loading...</td></tr> }
                    </tbody>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Salary in IDR</th>
                            <th scope="col">Salary in USD</th>
                        </tr>
                    </thead>
                    <tbody>
                        { dataSalaries.array.map( (salary, index) => {
                            return (
                                <tr key={ index }>
                                    <td scope="row">{ salary.id }</td>
                                    <td scope="row">{ salary.salaryInIDR }</td>
                                    <td scope="row">{ salary.salaryInIDR * 0.000070409891}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
          </div>
        );
  }
};

export default Problem1;
