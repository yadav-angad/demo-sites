import React from 'react';
import './App.css';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Link,
  Box,
  Card
} from "@mui/material";

function App() {
  const rows = [
    {
      description:
        "Online Book Store, Sample Application demonstration of how Host and MFE interact with each other using Redux, Context and Event Listeners.",
      repo: "https://github.com/yadav-angad/mfe-shell-book-store",
      demo: "https://yadav-angad.github.io/mfe-shell-book-store/host"
    },
    {
      description:
        "Sample application demostrating, how we can deploy each MFE independently and consume them in Shell / host via remoteEntry.js",
      repo: "https://github.com/yadav-angad/mfe-host-controller",
      demo: "https://yadav-angad.github.io/mfe-host-controller"
    },
    {
      description:
        "Sample Application demonstrating, how we can track our expenditure using simple calculation and via color coding.",
      repo: "https://github.com/yadav-angad/expense-tracker",
      demo: "https://yadav-angad.github.io/expense-tracker"
    }
  ];
  return (
    <div className='App'>
      <header className='App-header'>
        <Card sx={{ m: 2, backgroundColor: 'Gray' }} >
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: 'main' }}>
                  <TableCell width="40%" sx={tableHeaderFontStyle}>Description</TableCell>
                  <TableCell width="30%" sx={tableHeaderFontStyle}>GitHub Repo</TableCell>
                  <TableCell width="30%" sx={tableHeaderFontStyle}>Demo Link</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell sx={{ wordBreak: "break-word" }}>
                      {row.description}
                    </TableCell>
                    <TableCell>
                      <Link href={row.repo} target="_blank" color="inherit">
                        {row.repo}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link href={row.demo} target="_blank" color="inherit">
                        {row.demo}
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </header>
    </div>
  );
}

export default App;

const tableHeaderFontStyle = { fontSize: 'large', fontWeight: '600' };