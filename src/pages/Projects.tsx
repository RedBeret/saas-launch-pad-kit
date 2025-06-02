
import React, { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import ProjectCard, { Project } from '../components/projects/ProjectCard';
import ProjectDialog from '../components/projects/ProjectDialog';
import { Button } from '@/components/ui/button';
import { PlusCircle, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from '@/components/ui/use-toast';

// Sample projects data
const initialProjects: Project[] = [
  {
    id: '1',
    name: 'Marketing Website Redesign',
    description: 'Redesign and development of the company marketing website with updated branding and improved UX.',
    status: 'active',
    updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
  },
  {
    id: '2',
    name: 'Mobile App Development',
    description: 'Native mobile application for iOS and Android to complement our web platform.',
    status: 'active',
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
  },
  {
    id: '3',
    name: 'Customer Dashboard',
    description: 'Internal dashboard for customer support team to view user activity and respond to tickets.',
    status: 'draft',
    updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
  },
  {
    id: '4',
    name: 'Legacy System Migration',
    description: 'Migration plan and implementation for moving from the old CRM to the new platform.',
    status: 'archived',
    updatedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
  },
];

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [searchQuery, setSearchQuery] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | undefined>();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<string | undefined>();
  
  const filteredProjects = projects.filter(project => 
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleCreateProject = () => {
    setCurrentProject(undefined);
    setDialogOpen(true);
  };
  
  const handleEditProject = (project: Project) => {
    setCurrentProject(project);
    setDialogOpen(true);
  };
  
  const handleSaveProject = (projectData: Partial<Project>) => {
    if (projectData.id) {
      // Update existing project
      setProjects(projects.map(project => 
        project.id === projectData.id 
          ? { ...project, ...projectData, updatedAt: new Date() }
          : project
      ));
      toast({
        title: "Project updated",
        description: "Your project has been updated successfully",
      });
    } else {
      // Create new project
      const newProject: Project = {
        id: Date.now().toString(),
        name: projectData.name || 'Untitled Project',
        description: projectData.description || '',
        status: projectData.status || 'draft',
        updatedAt: new Date(),
      };
      setProjects([newProject, ...projects]);
      toast({
        title: "Project created",
        description: "Your new project has been created successfully",
      });
    }
  };
  
  const handleDeleteClick = (projectId: string) => {
    setProjectToDelete(projectId);
    setDeleteDialogOpen(true);
  };
  
  const handleConfirmDelete = () => {
    if (projectToDelete) {
      setProjects(projects.filter(project => project.id !== projectToDelete));
      setDeleteDialogOpen(false);
      toast({
        title: "Project deleted",
        description: "Your project has been deleted",
        variant: "destructive",
      });
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <p className="text-muted-foreground">
            Manage your team's projects and track their progress.
          </p>
        </div>
        <Button onClick={handleCreateProject} className="mt-4 md:mt-0">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search projects..." 
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard 
            key={project.id}
            project={project}
            onEdit={handleEditProject}
            onDelete={handleDeleteClick}
          />
        ))}
        
        {filteredProjects.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold">No projects found</h3>
            <p className="text-muted-foreground mt-2 mb-6 max-w-sm">
              {searchQuery 
                ? `We couldn't find any projects matching "${searchQuery}"`
                : "You haven't created any projects yet. Create your first project to get started."}
            </p>
            {!searchQuery && (
              <Button onClick={handleCreateProject}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Project
              </Button>
            )}
          </div>
        )}
      </div>
      
      <ProjectDialog 
        project={currentProject}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSave={handleSaveProject}
      />
      
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action will permanently delete this project and cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DashboardLayout>
  );
};

export default Projects;
