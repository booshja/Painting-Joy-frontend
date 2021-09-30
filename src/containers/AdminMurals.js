// dependencies
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
// components
import { AdminMuralCell, AdminPageTitle, LoadingSpinner } from "../components";
import AdminHeader from "./AdminHeader";
import {
    StyledGreenSoloButton,
    StyledOutlineButton,
} from "./styles/adminButtons";
import { StyledP } from "./styles/adminTypography";
// hooks
import { useHistory } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
// context
import MenuContext from "../context/MenuContext";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledAdminMurals = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f6f7f1;
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 60px);

    ${breakpoints("align-items", "", [{ 1024: "flex-start" }])}
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    align-items: center;

    ${breakpoints("padding", "", [{ 1024: "0 2rem" }])}
`;

const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;

    ${breakpoints("width", "", [{ 414: "75%" }, { 768: "42%" }])}
    ${breakpoints("align-self", "", [{ 1024: "flex-start" }])}
`;

const StyledOutlineBtn = styled(StyledOutlineButton)`
    font-size: 1rem;
    margin-left: 1rem;
`;

const StyledMuralsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    margin-top: 1rem;
    margin-bottom: 2rem;

    ${breakpoints("width", "%", [{ 1024: 100 }])}
`;

const AdminMurals = () => {
    // set up state
    const [activeMurals, setActiveMurals] = useState([]);
    const [archivedMurals, setArchivedMurals] = useState([]);
    const [showArchived, setShowArchived] = useState(false);
    const [loading, setLoading] = useState(true);
    // set up history
    const history = useHistory();
    // set up hooks
    const { isLoading, getAccessTokenSilently } = useAuth0();
    // set up context
    const { menuOpen } = useContext(MenuContext);

    useEffect(() => {
        const source = axios.CancelToken.source();
        // on component mount, get murals
        async function getMurals() {
            try {
                const token = await getAccessTokenSilently();

                const res = await axios.get(
                    process.env.REACT_APP_BACKEND_URL + "murals",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                        cancelToken: source.token,
                    }
                );
                // filter murals into archived and active
                const archived = res.data.murals.filter(
                    (mural) => mural.isArchived === true
                );
                const active = res.data.murals.filter(
                    (mural) => mural.isArchived === false
                );
                // set states
                setArchivedMurals(() => archived);
                setActiveMurals(() => active);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }

        getMurals();

        return function cleanup() {
            source.cancel();
        };
    }, []);

    const handleShowArchived = () => {
        // flip boolean for showArchived
        setShowArchived((val) => !val);
    };

    const handleArchive = async (id) => {
        // send request to api to set mural as archived
        try {
            const token = await getAccessTokenSilently();

            await axios.patch(
                process.env.REACT_APP_BACKEND_URL +
                    `murals/mural/${id}/archive`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch (err) {
            console.log("Archive Error", err);
        }
        history.go(0);
    };

    const handleUnArchive = async (id) => {
        // send request to api to set mural as active
        try {
            const token = await getAccessTokenSilently();

            await axios.patch(
                process.env.REACT_APP_BACKEND_URL +
                    `murals/mural/${id}/unarchive`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch (err) {
            console.log("Unarchive Error", err);
        }
        history.go(0);
    };

    const handleDelete = async (id) => {
        // send request to api to delete mural
        try {
            const token = await getAccessTokenSilently();

            await axios.delete(
                process.env.REACT_APP_BACKEND_URL + `murals/mural/${id}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch (err) {
            console.log("Delete Error");
        }
        history.go(0);
    };

    if (loading)
        return (
            <StyledAdminMurals>
                <LoadingSpinner />
            </StyledAdminMurals>
        );

    return (
        <StyledAdminMurals>
            <AdminPageTitle>Murals</AdminPageTitle>
            <StyledContainer>
                <StyledButtonContainer>
                    <StyledGreenSoloButton
                        onClick={() => history.push("/admin/murals/new")}
                    >
                        Add New Mural
                    </StyledGreenSoloButton>
                    <StyledOutlineBtn
                        color="#207070"
                        onClick={() => handleShowArchived()}
                    >
                        {showArchived
                            ? "See Active Murals"
                            : "See Archived Murals"}
                    </StyledOutlineBtn>
                </StyledButtonContainer>
                <StyledMuralsContainer>
                    {showArchived
                        ? archivedMurals.map((mural) => (
                              <AdminMuralCell
                                  key={mural.id}
                                  data={mural}
                                  handleUnArchive={handleUnArchive}
                                  handleDelete={handleDelete}
                                  showArchived={showArchived}
                              />
                          ))
                        : activeMurals.map((mural) => (
                              <AdminMuralCell
                                  key={mural.id}
                                  data={mural}
                                  handleArchive={handleArchive}
                                  handleDelete={handleDelete}
                                  showArchived={showArchived}
                              />
                          ))}
                    {showArchived && archivedMurals.length === 0 && (
                        <StyledP>No archived murals!</StyledP>
                    )}
                    {!showArchived && activeMurals.length === 0 && (
                        <StyledP>No active murals!</StyledP>
                    )}
                </StyledMuralsContainer>
            </StyledContainer>
        </StyledAdminMurals>
    );
};

export default AdminMurals;
