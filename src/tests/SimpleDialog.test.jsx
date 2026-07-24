import ConfirmDialog from "../shared-lib/confirmDialog.jsx"
import { describe, expect, it } from 'vitest'
import { getByRole, render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/vitest"

describe("ConfirmDialog", () => {
    it("Renders the Default Confirm Dialog", () => {
        render(<ConfirmDialog></ConfirmDialog>)
        const confirmDialogElement = screen.getByText(/certain/)
        expect(confirmDialogElement).toBeInTheDocument()
        expect(confirmDialogElement).toHaveTextContent(/Are you certain/i)
    }),

    it("Renders the Confirm Dialog with custom message", () => {
        render(<ConfirmDialog text="I am a custom Message"></ConfirmDialog>)
        const confirmDialogElement = screen.getByText(/custom/)
        expect(confirmDialogElement).toBeInTheDocument()
        expect(confirmDialogElement).toHaveTextContent(/I am a custom Message/i)
    })
})