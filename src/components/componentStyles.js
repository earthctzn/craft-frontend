import styled from 'styled-components'
    const BreweryCard = styled.div`
        background-color: rgba(248, 243, 243, 0.4);
        color: darkred;
        width: 2in;
        height: in;
        display: inline-block;
        display: inline-table;
        padding: 10px;
        margin: 10px;
        border-radius: .3in;
        border-style: solid;
        border-color: black;
    `
    const SingleBrewery = styled.div`
        background-color: rgba(248, 243, 243, 0.4);
        color: darkred;
        width: 2in;
        height: in;
        display: inline-block;
        display: inline-table;
        padding: 10px;
        margin: 10px;
        border-radius: .3in;
        border-style: solid;
        border-color: black;
    `
    const InfoWindowContent = styled.div`
        background-color: rgba(248, 243, 243, 0.4);
        color: darkred;
        display: inline-block;
        display: inline-table;
        padding: 10px;
        margin: 10px;
        border-radius: .3in;
    `
    const AddressCard = styled.div`
        background-color: rgba(248, 243, 243 0.0);
        color: darkred;
        text-allign: center;
        font-size: 80%;
    `
    const MapCard = styled.div`
        width: 70vw;
        height: 60vh;
        position: center;
        margin-left: auto;
        margin-right: auto;
    `
    const LoginCard = styled.div`
        background-color: rgba(248, 243, 243, 0.4);
        color: darkred;
        width: 250px;

        display: inline-block;
        display: inline-table;
        padding: 10px;
        margin: 10px;
        border-radius: .3in;
        border-style: solid;
        border-color: black;

    `
    const ErrorCard = styled.p`
        background-color: rgba(248, 243, 243, 0.4);
        color: darkred;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        border-radius: .3in;
        border-style: solid;
        border-color: black;
        margin-left: auto;
        margin-right: auto;
    `
export {
    BreweryCard, 
    AddressCard, 
    SingleBrewery, 
    MapCard, 
    LoginCard, 
    InfoWindowContent, 
    ErrorCard
}