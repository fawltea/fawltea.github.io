---
layout: post
title: Kubectl cheat sheet
categories: [tech]
---


# 🧰 `kubectl` Cheat Sheet

## 📋 Listing Resources

```bash
kubectl get pods
kubectl get services
kubectl get deployments
kubectl get nodes
kubectl get all
```

- Add `-n <namespace>` for a specific namespace.
- Add `-A` or `--all-namespaces` for all namespaces.

---

## 🔍 Inspecting Resources

```bash
kubectl describe pod <pod-name>
kubectl logs <pod-name>
kubectl logs <pod-name> -c <container-name>   # for multi-container pods
kubectl get pod <pod-name> -o yaml            # raw YAML output
```

---

## 🛠️ Applying & Deleting Configs

```bash
kubectl apply -f <file.yaml>      # preferred for declarative usage
kubectl create -f <file.yaml>
kubectl delete -f <file.yaml>
```

---

## 🚨 Debugging & Exec

```bash
kubectl exec -it <pod-name> -- /bin/bash      # or /bin/sh
kubectl port-forward <pod-name> 8080:80       # local:remote port
```

---

## 💡 Shortcuts

```bash
kubectl get po        # pods
kubectl get svc       # services
kubectl get deploy    # deployments
```

---

## 🌐 Contexts & Clusters

```bash
kubectl config get-contexts
kubectl config use-context <context-name>
kubectl config current-context
```

---

## 📛 Namespaces

```bash
kubectl get ns
kubectl get pods -n <namespace>
kubectl create ns <namespace-name>
```

---

## ✏️ Editing & Patching

```bash
kubectl edit deployment <deployment-name>
kubectl patch deployment <name> -p '{"spec":{"replicas":2}}'
```

---

## 📈 Scaling & Rollouts

```bash
kubectl scale deployment <name> --replicas=3
kubectl rollout status deployment/<name>
kubectl rollout undo deployment/<name>
```

---

## 🔌 Useful Plugins (via `krew`)

```bash
kubectl krew install ctx     # manage contexts
kubectl krew install ns      # manage namespaces
```

---

## 🧠 Misc Tips

```bash
kubectl get pods -o wide      # more info: IPs, nodes, etc.
watch kubectl get pods        # live-updating view
```

### Optional Aliases (add to `.bashrc`, `.zshrc`, etc.)

```bash
alias k='kubectl'
alias kgp='kubectl get pods'
```
