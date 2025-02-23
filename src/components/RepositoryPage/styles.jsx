import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    color: #fff;
`;

export const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 5px;
    border: 2px solid #FFFF;
`;

export const Title = styled.h1`
    padding: 8px;
    margin-bottom: 8px;
    font-size: 30px;
    border-radius:5px;
`;

export const RepositoriesList = styled.div`
    background-color: #B9B4C7;
    padding: 15px;
    border-radius:5px;

    h2 {
    color: #352F44;  
    font-size: 18px;
    }

    p {
    color: #433db9;
    font-weight: bold;
    font-size: 12px;
    }
`;

export const BackButton = styled(Link)`
    background-color: #4f46e5;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 10px;
    transition: background-color 0.3s ease;

    &:hover {
    background-color: #3c3480;
    }
`;
