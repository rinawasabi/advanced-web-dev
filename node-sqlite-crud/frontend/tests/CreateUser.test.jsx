import React, { useState } from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CreateUser from '../src/components/CreateUser';
import ReadDeleteUsers from '../src/components/ReadDeleteUsers';

// Parent component for testing
function UserManagementTestWrapper() {
    const [refresh, setRefresh] = useState(0);
    return (
        <>
            <CreateUser onUserAdded={() => setRefresh((prev) => prev + 1)} />
            <ReadDeleteUsers refresh={refresh} />
        </>
    );
}

// Generate a random name and email address
const name = (Math.random() + 1).toString(36).substring(7);
const email = name + '@' + (Math.random() + 1).toString(36).substring(7) + '.io';

it('adds and deletes a user', async () => {
    render(<UserManagementTestWrapper />);

    // Fill in the inputs and create a user
    fireEvent.change(screen.getByPlaceholderText(/Name/i), { target: { value: name } });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: email } });
    fireEvent.click(screen.getByRole('button', { name: /Create/i }));

    // Confirm success message is displayed
    const message = await screen.findByText(`User created successfully: ${name}`);
    expect(message).toBeInTheDocument();

    // Find the <li> element from the user list that includes the name
    const listItems = await screen.findAllByRole('listitem');
    const targetItem = listItems.find(li => li.textContent.includes(name));

    expect(targetItem).toBeInTheDocument();

    // Find and click the delete button
    const deleteButton = targetItem.querySelector("button");
    fireEvent.click(deleteButton);

    // After deletion, confirm the user's name no longer appears in the list
    await waitFor(() => {
        const remainingItems = screen.queryAllByRole('listitem');
        const stillExists = remainingItems.some(li => li.textContent.includes(name));
        expect(stillExists).toBe(false);
    });
});
