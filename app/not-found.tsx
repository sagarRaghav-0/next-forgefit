// app/not-found.tsx
export const dynamic = "force-dynamic";

export default function NotFound() {
    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>404 – Page not found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    );
}
