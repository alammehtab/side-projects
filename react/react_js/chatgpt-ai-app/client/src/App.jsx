function App() {
  return (
    <div className="app">
      <div className="chat_container"></div>
      <form>
        <textarea
          name="prompt"
          rows={1}
          cols={1}
          placeholder="Ask me..."
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
