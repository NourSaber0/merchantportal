import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
 background: linear-gradient( 90deg, #0C664A 10%, #043E2F 100%) center center;
  margin-top: 10px;
`;
export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  font-size: 18px;
  font-weight: 500;
  color: #080912;
  align-content: center;
  flex-direction: column;
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
`;
export const SubmitButton = styled.button`
  background-color: #B68B26;
  color: #F6eee0;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
	);
  

	&:hover {
		filter: brightness(1.03);
	}
`;
export const Input = styled.input`
  width: 100%;
  height: 35px;
  outline: none;
  color: #c1bdbd;
  font-size: 15px;
  font-weight: 400;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-radius: 5px;
  padding: 0 10px;
  transition: all 200ms ease-in-out;
  margin-bottom: 5px;

  &::placeholder {
    color: grey;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #c1bdbd;
  }
`;
// export const BoldLink = styled.a`
//   font-size: 12px;
//   color: rgb(164, 92, 64);
//   font-weight: 500;
//   text-decoration: none;
//   border-bottom: 1px dashed rgb(195, 131, 112);
// `;
export const DisplayCard = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  margin: auto;
  padding: 2%;
`;
export const SidebarContainer = styled.div`
  width: 250px;
  background: linear-gradient( 90deg, #0C664A 10%, #043E2F 100%) center center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const NavItem = styled.div`
  color: #ffffff;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #007960;
  }
`;
export const TableHeader = styled.thead`
  background-color: #f6f6f6;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

