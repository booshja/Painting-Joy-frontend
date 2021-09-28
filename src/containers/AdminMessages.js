// dependencies
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
// components
import {
    AdminMessageCell,
    AdminPageTitle,
    LoadingSpinner,
} from "../components";
import AdminHeader from "./AdminHeader";
import { StyledGreenSoloButton } from "./styles/adminButtons";
import { StyledP } from "./styles/adminTypography";
// hooks
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// context
import MenuContext from "../context/MenuContext";

const StyledAdminMessages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f6f7f1;
    min-height: 91.75vh;
`;

const StyledHeadlineContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledMessagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    margin-bottom: 2rem;
`;

const AdminMessages = () => {
    // set up state
    const [activeMessages, setActiveMessages] = useState([]);
    const [archivedMessages, setArchivedMessages] = useState([]);
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
        // on component mount, get messages
        async function getMessages() {
            try {
                const token = await getAccessTokenSilently();

                const res = await axios.get(
                    process.env.REACT_APP_BACKEND_URL + "messages/",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                        cancelToken: source.token,
                    }
                );
                // filter messages into archived and active
                const archived = res.data.messages.filter(
                    (message) => message.isArchived === true
                );
                const active = res.data.messages.filter(
                    (message) => message.isArchived === false
                );
                // set states
                setArchivedMessages(() => archived);
                setActiveMessages(() => active);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }

        getMessages();

        return function cleanup() {
            source.cancel();
        };
    }, []);

    const handleShowArchived = () => {
        // flip boolean for showArchived
        setShowArchived((val) => !val);
    };

    const handleArchive = async (id) => {
        // send request to api to set message as archived
        try {
            const token = await getAccessTokenSilently();

            await axios.patch(
                process.env.REACT_APP_BACKEND_URL + `messages/archive/${id}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch (err) {
            console.log("Archive Error");
        }
        history.go(0);
    };

    const handleUnArchive = async (id) => {
        // send request to api to set message as active
        try {
            const token = await getAccessTokenSilently();

            await axios.patch(
                process.env.REACT_APP_BACKEND_URL + `messages/unarchive/${id}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch (err) {
            console.log("UnArchive Error");
        }
        history.go(0);
    };

    const handleDelete = async (id) => {
        // send request to api to delete message
        try {
            const token = await getAccessTokenSilently();

            await axios.delete(
                process.env.REACT_APP_BACKEND_URL + `messages/delete/${id}`,
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
            <StyledAdminMessages>
                <LoadingSpinner />
            </StyledAdminMessages>
        );

    return menuOpen ? (
        <AdminHeader />
    ) : (
        <>
            {" "}
            <AdminHeader />{" "}
            <main>
                <StyledAdminMessages>
                    <StyledHeadlineContainer>
                        <AdminPageTitle>Messages</AdminPageTitle>
                        <StyledGreenSoloButton
                            onClick={() => handleShowArchived()}
                        >
                            {showArchived
                                ? "See Active Messages"
                                : "See Archived Messages"}
                        </StyledGreenSoloButton>
                    </StyledHeadlineContainer>
                    <StyledMessagesContainer>
                        {showArchived
                            ? archivedMessages.map((message) => (
                                  <AdminMessageCell
                                      key={message.id}
                                      data={message}
                                      handleArchive={handleArchive}
                                      handleDelete={handleDelete}
                                      handleUnArchive={handleUnArchive}
                                      showArchived={showArchived}
                                  />
                              ))
                            : activeMessages.map((message) => (
                                  <AdminMessageCell
                                      key={message.id}
                                      data={message}
                                      handleArchive={handleArchive}
                                      handleDelete={handleDelete}
                                      handleUnArchive={handleUnArchive}
                                      showArchived={showArchived}
                                  />
                              ))}
                        {showArchived && archivedMessages.length === 0 && (
                            <StyledP>No archived messages!</StyledP>
                        )}
                        {!showArchived && activeMessages.length === 0 && (
                            <StyledP>No active messages!</StyledP>
                        )}
                    </StyledMessagesContainer>
                </StyledAdminMessages>
            </main>
        </>
    );
};

export default AdminMessages;
