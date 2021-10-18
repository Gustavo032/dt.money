import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #e52e4d
        --blue: #5429cc
        
        --blue-light: #6933ff
        
        --text-tite: #363f5f
        --text-body: #969cb3
        
        --background: #f0f2f5;
        --shape: #ffffff
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size: 16px(bom pra desktop)
    html {
        @media (max-width: 1080px){
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px){
            font-size: 86.5%; // 14px
        }
        @media (max-width: px){
            font-size: 81,25%; // 13px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button { 
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`