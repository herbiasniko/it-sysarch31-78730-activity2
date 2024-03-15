

export default function Students({ img, name, email }) {
    return (
        <div className="card">
           <img className="img" src= {img} alt="Profile Picture"></img>
           <h2>{name}</h2>
           <p>{email}</p>
        </div>
    );
}

