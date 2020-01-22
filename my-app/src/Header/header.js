import React from 'react';

function Header() {
    return (
    <div className='container'>
        <hr className='my-4'></hr>
        <div className='jumbotron-fluid'>
            <h2 className='display-5 text-center'>Memory Bash, The Best Memory Game Ever!</h2>
            <p className='lead text-center'>Click on a character from The Office, but don't click the same character more than once, or your score will reset!</p>
            <hr className='my-4'></hr>
        </div>
    </div>
    )
}

export default Header;