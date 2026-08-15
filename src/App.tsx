import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EcosystemSection } from './components/EcosystemSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ImpactSection } from './components/ImpactSection';
import { TekmenAiSection } from './components/TekmenAiSection';
import { AiAssistant } from './components/AiAssistant';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';

import { AboutView } from './views/AboutView';
import { InnovationView } from './views/InnovationView';
import { ProductsView } from './views/ProductsView';
import { ProductDetailView } from './views/ProductDetailView';
import { TeamView } from './views/TeamView';
import { CommunityView } from './views/CommunityView';
import { StartProjectView } from './views/StartProjectView';

import { ViewState, ProductItem, ProjectItem } from './types';
import { AGENCY_URL, PRODUCTS_DATA } from './data';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedLegacyProject, setSelectedLegacyProject] = useState<ProjectItem | null>(null);

  const handleNavigate = (view: ViewState | 'agency') => {
    if (view === 'agency') {
      window.open(AGENCY_URL, '_blank');
      return;
    }
    setCurrentView(view as ViewState);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: ProductItem) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCardClick = (cardId: string) => {
    if (cardId === 'agency') {
      window.open(AGENCY_URL, '_blank');
    } else if (cardId === 'solutions') {
      handleNavigate('innovation');
    } else if (cardId === 'team') {
      handleNavigate('team');
    } else if (cardId === 'community') {
      handleNavigate('community');
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      
      {/* Header */}
      <Header
        onJoinClick={() => setJoinModalOpen(true)}
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero
              onExploreClick={() => window.open(AGENCY_URL, '_blank')}
              onJoinCommunityClick={() => setJoinModalOpen(true)}
              onStartProjectClick={() => handleNavigate('start-project')}
            />
            <EcosystemSection
              onCardClick={handleCardClick}
            />
            <PortfolioSection
              onSelectProject={(project) => {
                const found = PRODUCTS_DATA.find(p => p.id === project.id);
                if (found) {
                  handleSelectProduct(found);
                } else {
                  setSelectedLegacyProject(project);
                }
              }}
              onViewAll={() => handleNavigate('innovation')}
            />
            <ImpactSection />
            <TekmenAiSection
              onExploreAiClick={() => setJoinModalOpen(true)}
            />
          </>
        )}

        {currentView === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onJoinClick={() => setJoinModalOpen(true)}
          />
        )}

        {currentView === 'innovation' && (
          <InnovationView
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onStartProject={() => handleNavigate('start-project')}
          />
        )}

        {currentView === 'products' && (
          <ProductsView
            onSelectProduct={handleSelectProduct}
            onStartProject={() => handleNavigate('start-project')}
          />
        )}

        {currentView === 'product-detail' && selectedProduct && (
          <ProductDetailView
            product={selectedProduct}
            onBack={() => handleNavigate('products')}
            onStartProject={() => handleNavigate('start-project')}
          />
        )}

        {currentView === 'team' && (
          <TeamView
            onJoinClick={() => setJoinModalOpen(true)}
          />
        )}

        {currentView === 'community' && (
          <CommunityView
            onJoinClick={() => setJoinModalOpen(true)}
          />
        )}

        {currentView === 'start-project' && (
          <StartProjectView
            onBack={() => handleNavigate('home')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavClick={handleNavigate}
      />

      {/* Floating AI Assistant Chat Widget */}
      <AiAssistant
        onNavigate={handleNavigate}
      />

      {/* Modals */}
      <Modals
        joinModalOpen={joinModalOpen}
        onCloseJoinModal={() => setJoinModalOpen(false)}
        selectedProject={selectedLegacyProject}
        onCloseProjectModal={() => setSelectedLegacyProject(null)}
        selectedEcosystemCard={null}
        onCloseEcosystemModal={() => {}}
      />

    </div>
  );
}
