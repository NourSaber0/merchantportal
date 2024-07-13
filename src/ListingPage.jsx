import styled from 'styled-components';
import Sidebar from "./sideBar";
import Users from "./Users";
const MainContainer = styled.div`
  display: flex;
`;

const TableContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
`;
const ListingPage = () => {
  return (
	  <MainContainer>
		  <Sidebar />
		  <TableContainer>
			  <Users/>
		  </TableContainer>
	  </MainContainer>
  );
}
export default ListingPage;