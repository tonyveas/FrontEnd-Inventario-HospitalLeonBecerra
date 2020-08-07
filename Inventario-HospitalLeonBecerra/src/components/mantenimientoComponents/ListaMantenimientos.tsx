import React from 'react';
import { IonItem, IonLabel, IonRippleEffect, IonAvatar, IonContent, IonList, IonIcon, IonButton, IonModal, IonToolbar, IonTitle, IonButtons, IonListHeader, IonNote } from '@ionic/react';
import { trash, create, key, speedometer, reorder, logIn, card, calendar } from 'ionicons/icons';

class ListaMantenimiento extends React.Component<any, any>  {
    constructor(props: any) {
        super(props);
        this.state = {
            ventanaDetalle: false,
            esDadoDeBaja: false,

        }
    }



    render() {
        return (
            <IonList>
                <IonItem className="ion-activatable" >
                    <IonLabel key={this.props.id_mantenimiento} onClick={() => this.setState({ ventanaDetalle: true })}>
                        <h2><b>{this.props.titulo}</b></h2>
                        <h3 color="secondary"> Códdigo: {this.props.codigo}</h3>
                        <p> Tipo:
                            {
                                this.props.tipo === 'C' ? " Correctivo" :
                                    this.props.tipo === 'P' ? " Preventivo" :
                                        this.props.tipo === 'R' ? " Revisión" : null
                            }</p>
                        <IonRippleEffect></IonRippleEffect>
                    </IonLabel>

                    <IonAvatar slot="start">
                        {
                            this.props.tipo === 'C' ? <img src="./assets/img/mantenimiento/C.png" alt="Correctivo" /> :
                                this.props.tipo === 'P' ? <img src="./assets/img/mantenimiento/P.png" alt="Preventivo" /> :
                                    this.props.tipo === 'R' ? <img src="./assets/img/mantenimiento/R.png" alt="R" /> : null
                        }
                    </IonAvatar>

                    <>
                        <IonButton size="default" fill="clear" routerLink={"/formulariomantenimiento/edit/" + this.props.id_mantenimiento} color="secondary" >
                            <IonIcon color="medium" icon={create}></IonIcon>
                        </IonButton>
                        <IonButton size="default" fill="clear" onClick={() => console.log('c')} color="primary" >
                            <IonIcon color="medium" icon={trash}></IonIcon>
                        </IonButton>
                    </>

                </IonItem>

                <IonContent>
                    <IonModal
                        isOpen={this.state.ventanaDetalle}
                        onDidDismiss={e => this.setState({ ventanaDetalle: false })}>
                        <IonToolbar color="primary">
                            <IonTitle>Detalle de la solicitud</IonTitle>
                            <IonButtons slot="end">
                                <IonButton onClick={() => this.setState({ ventanaDetalle: false })}>
                                    <IonIcon name="close" slot="icon-only"></IonIcon>
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                        <IonContent>
                            <IonList>
                                <IonListHeader>Información general</IonListHeader>
                                <IonItem>
                                    <IonIcon slot="start" icon={key}> </IonIcon>
                                    ID del mantenimiento <IonNote color="dark" slot="end">{this.props.id_mantenimiento}</IonNote>
                                </IonItem>

                                <IonItem>
                                    <IonIcon slot="start" icon={card}> </IonIcon>
                                   Título <IonNote slot="end">{this.props.titulo}</IonNote>
                                </IonItem>

                                <IonItem>
                                    <IonIcon slot="start" icon={logIn}> </IonIcon>
                                    Realizado por <IonNote slot="end">{this.props.realizado_por}</IonNote>
                                </IonItem>

                                <IonItem>
                                    <IonIcon slot="start" icon={calendar} > </IonIcon>
                                    Fecha de inicio <IonNote color="dark" slot="end">{this.props.fecha_inicio}</IonNote>
                                </IonItem>

                                <IonListHeader>Datos del equipo</IonListHeader>
                                <IonItem>
                                    <IonIcon slot="start" icon={card}> </IonIcon>
                                    Código <IonNote slot="end">{this.props.codigo}</IonNote>
                                </IonItem>

                                <IonItem>
                                    <IonIcon slot="start" icon={speedometer}> </IonIcon>
                                    Estado
                                    <IonNote color="dark" slot="end">
                                        {this.props.estado_equipo === 'D' ? "Disponible" : null}
                                        {this.props.estado_equipo === 'B' ? "De baja" : null}
                                        {this.props.estado_equipo === 'R' ? "Reparado" : null}
                                        {this.props.estado_equipo === 'ER' ? "En revisión" : null}
                                        {this.props.estado_equipo === 'O' ? "Operativo" : null}
                                    </IonNote>
                                </IonItem>

                                <IonItem>
                                    <IonIcon slot="start" icon={reorder}> </IonIcon>
                                    Tipo de equipo <IonNote color="dark" slot="end">{this.props.tipo_equipo}</IonNote>
                                </IonItem>

                            </IonList>
                        </IonContent>
                    </IonModal>
                </IonContent>
            </IonList>
        );
    }
}

export default ListaMantenimiento;