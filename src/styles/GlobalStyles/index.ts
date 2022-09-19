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
`;
