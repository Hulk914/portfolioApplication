export interface Home {
    name: string;
    experience: string;
    resumePath: string;
    designation: string;
}

interface Portfolio {
    home: Home;
}

export interface PortfolioData {
    [key: string]: Portfolio;
}