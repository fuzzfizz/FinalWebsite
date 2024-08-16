'use client';
import Link from 'next/link'

import { useEffect, useState } from 'react';

export default function Page() {
  const [items, setItems] = useState([]);



  async function getUsers() {
    try {
      const res = await fetch('https://backend-ten-murex-12.vercel.app/api/users');
      if (!res.ok) {
        console.error('Failed to fetch data');
        return;
      }
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleDel = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/users`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
        },
        body: JSON.stringify({ id }),
      });


      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await res.json();
      console.log(result);

      getUsers();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  useEffect(() => {


    getUsers()
    // const interval = setInterval(getUsers, 10000);
    // return () => clearInterval(interval);
  }, []);

  return (
    <>

      <br /><br /><br /><br />
      <div className="container">
        <div class="card">
          <div class="card-header">
            Users List
          </div>
          <div class="card-body">
            <div className="row">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th className='col-md-2 text-center'>#</th>
                    <th className='col-md-4'>Firstname</th>
                    <th className='col-md-4'>Lastname</th>
                    <th className='col-md-1'>Edit</th>
                    <th className='col-md-1'>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className='text-center'>{item.id}</td>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td><Link href={`/users/edit/${item.id}`} className="btn btn-warning">Edit</Link></td>
                      <td><button className="btn btn-danger" onClick={() => handleDel(item.id)}>Del</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
      <br /><br />

    </>
  );
}