"use client"; // Zustand di Next.js butuh Client Component

import { useState } from "react";
import { useTaskStore } from "@/store/useTaskStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function TodoApp() {
  const [input, setInput] = useState("");
  
  // Ambil state dan action dari store
  const { tasks, addTask, removeTask } = useTaskStore();

  const handleAdd = () => {
    if (input.trim()) {
      addTask(input);
      setInput("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-2xl font-bold text-center">Zustand Task Manager</h2>
      
      <div className="flex gap-2">
        <Input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Tulis tugas baru..." 
        />
        <Button onClick={handleAdd}>Tambah</Button>
      </div>

      <div className="space-y-2">
        {tasks.map((task) => (
          <Card key={task.id}>
            <CardContent className="flex justify-between items-center p-4">
              <span>{task.text}</span>
              <Button variant="destructive" size="sm" onClick={() => removeTask(task.id)}>
                Hapus
              </Button>
            </CardContent>
          </Card>
        ))}
        {tasks.length === 0 && <p className="text-center text-muted-foreground">Belum ada tugas.</p>}
      </div>
    </div>
  );
}