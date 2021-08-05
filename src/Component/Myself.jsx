import React from 'react'

export default function Myself() {
 
    const getFakePerson = async () => {
        try {
        let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
        let { results } = res.json();
        console.log(results);
        } catch (error) {
        console.error(error);
        }
        };
        getFakePerson();

    return (
        <div>
            <h3>
                {
                
                }
            </h3>
        </div>
    )
}
