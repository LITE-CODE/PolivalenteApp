import subprocess

# Passo 1: Certificar-se de estar na branch principal
subprocess.run(['git', 'checkout', 'v2'])

# Passo 2: Atualizar o repositório local
subprocess.run(['git', 'pull'])

# Passo 3: Loop para atualizar as branches locais
branches = subprocess.check_output(['git', 'branch']).decode('utf-8').split()
for branch in branches:
    # Ignorar a branch atualmente selecionada (normalmente 'master' ou 'main')
    if branch.startswith('*'):
        continue
    # Atualizar a branch local com as alterações da remota
    subprocess.run(['git', 'checkout', branch])
    subprocess.run(['git', 'pull', 'origin', branch])
