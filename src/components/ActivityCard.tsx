//import Compra from '../assets/ActivityIcons/Compra.svg';
//import Devolucion from '../assets/ActivityIcons/Devolucion.svg';
//import Pedido from '../assets/ActivityIcons/Pedido.svg';
//import Recarga from '../assets/ActivityIcons/Recarga.svg';
//import RecargaRechazada from '../assets/ActivityIcons/RecargaRechazada.svg';


type ActivityCardProps = {
    movimiento: {
        id: number;
        tipo: string;
        titulo: string;
        hijo: string;
        medio: string;
        estado: string | null;
        monto: number;
        fecha: string;
    };
};

export default function ActivityCard({ movimiento }: ActivityCardProps) {
    return (
        <div>
            <h3>{movimiento.titulo}</h3>
            <p>{movimiento.hijo}</p>
            <p>{movimiento.monto}</p>
            <p>{movimiento.fecha}</p>
        </div>
    )
}
