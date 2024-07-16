import styled from 'styled-components';
import Sidebar from "./sideBar";
import Users from "./Users";
import CreateMerchant from "./CreateMerchant";
const MainContainer = styled.div`
  display: flex;
`;

const TableContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
`;
const MerchantPage = () => {
	return (
		<MainContainer>
			<Sidebar />
			<TableContainer>
				<CreateMerchant/>
			</TableContainer>
		</MainContainer>
	);
}
export default MerchantPage;