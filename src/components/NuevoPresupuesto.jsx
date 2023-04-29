import { useState } from 'react'
import { Mensaje } from './Mensaje';

export const NuevoPresupuesto = ({
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto
}) => {
    const [mensaje, setMensaje] = useState('');

    const handlePresupuesto = (e) => {
        e.preventDefault();
        if (!presupuesto || presupuesto < 0) {
            setMensaje('No es un Presupuesto Válido');
        } else {
            setMensaje('');
            setIsValidPresupuesto(true);
        }
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handlePresupuesto} className='formulario'>
                <div className="campo">
                    <label htmlFor="">Definir Presupuesto</label>
                    <input
                        type="number"
                        className="nuevo-presupuesto"
                        placeholder='Añade tu presupuesto'
                        value={presupuesto}
                        onChange={(e) => setPresupuesto(Number(e.target.value))}
                    />
                </div>
                <input type="submit" className='' value='Añadir' />
                {mensaje && <Mensaje tipo={'error'}>{mensaje}</Mensaje>}
            </form>
        </div>

    )
}
