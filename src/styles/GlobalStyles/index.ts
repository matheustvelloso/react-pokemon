import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    box-sizing: border-box;
    
}
.bg-success {
    background-color: #48D0B0 !important;
}
.bg-danger{
    background-color: #FB6C6C !important;
}
.bg-info{
    background-color: #4BC07A !important;
}
.progress{
    min-width: 103px;
    height: 3px;
    margin-bottom: 34px;

}

.row-cols-2>*{
    @media (max-width: 431px) {
        width: 100%;
    }
}
.table>:not(caption)>*>* {
    padding: 0; 
    background-color: var(--bs-table-bg);
    border-bottom-width: 0; 
    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}
.p-10px{
    padding: 10px;
}
.w-20{
    width: 20%;

    @media(max-width: 767px){
        width: 30%;
    }
    @media(max-width: 575px){
        width: 40%;
    }
}
`;
