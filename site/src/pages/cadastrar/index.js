import { useState } from 'react';
import { cadastrarvilao } from '../../api';

export default function Index(){
    const [nome, setnome] = useState('');
    const [poder, setpoder] = useState(false);


<div className="nome v">
    <label>nome</label>
    <input type='text' placeholder="nome do vilao" value={nome} onChange= {A => setnome(A.target.value)}/>
</div>
}

           
