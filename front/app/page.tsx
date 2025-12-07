import Button from "./_components/Button";

export default function Home() {
  return (
    <div className="p-4 space-y-4">
      <Button variant="primary" size="md" leftIcon="📁">
        Сохранить
      </Button>

      <Button 
        variant="outline" 
        size="sm" 
        isLoading
      >
        Загрузка...
      </Button>
    </div>
  );
}
